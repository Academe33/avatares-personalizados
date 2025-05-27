/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import AgentEdit from './components/AgentEdit';
import ControlTray from './components/console/control-tray/ControlTray';
import ErrorScreen from './components/demo/ErrorSreen';
import KeynoteCompanion from './components/demo/keynote-companion/KeynoteCompanion';
import Header from './components/Header';
import UserSettings from './components/UserSettings';
import PersonaCreationScreen from './components/PersonaCreationScreen'; 
import { LiveAPIProvider } from './contexts/LiveAPIContext';
import { useAgent, useUI } from './lib/state';
import { useEffect } from 'react';

// Ensure API_KEY is correctly sourced. process.env.GEMINI_API_KEY is common for Node.js environments.
// For client-side React apps (like Create React App), it might be process.env.REACT_APP_GEMINI_API_KEY.
// If this app is built with Vite, it would be import.meta.env.VITE_GEMINI_API_KEY.
// The current setup uses a global 'process.env.API_KEY' injected, which is fine if managed by the build/runtime.
const API_KEY = process.env.API_KEY;

if (typeof API_KEY !== 'string' || API_KEY === '') {
  // Render an error message directly in the DOM if the API key is missing
  // This is a fallback for when React might not have initialized yet or for critical errors.
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="font-family: sans-serif; padding: 20px; text-align: center; color: #333; background-color: #f8f8f8; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="color: #D32F2F;">Erro de Configuração Crítico</h1>
        <p style="font-size: 1.2em;">A variável de ambiente <code style="background: #eee; padding: 2px 5px; border-radius: 3px;">API_KEY</code> para a API do Gemini não foi definida.</p>
        <p>Por favor, certifique-se de que a chave API está corretamente configurada no ambiente de execução.</p>
        <p style="font-size: 0.9em; color: #777; margin-top: 20px;">Este aplicativo não pode funcionar sem uma chave de API válida.</p>
      </div>
    `;
  }
  // Throw an error to stop further script execution if critical setup is missing.
  throw new Error('Variável de ambiente API_KEY não definida. Verifique a configuração do seu ambiente.');
}


/**
 * Main application component.
 */
function App() {
  const { showUserConfig, showAgentEdit, showPersonaCreationScreen, setShowPersonaCreationScreen } = useUI();
  const { current: currentAgent, setCurrent: setCurrentAgent, getDefaultAgent } = useAgent();

  // Effect to ensure a default agent is set if none is current after initial setup
  useEffect(() => {
    if (!currentAgent && !showPersonaCreationScreen) {
      setCurrentAgent(getDefaultAgent());
    }
  }, [currentAgent, showPersonaCreationScreen, setCurrentAgent, getDefaultAgent]);
  

  return (
    <div className="App">
      <LiveAPIProvider apiKey={API_KEY}>
        <ErrorScreen />
        {showPersonaCreationScreen ? (
          <PersonaCreationScreen />
        ) : (
          <>
            <Header />
            {showUserConfig && <UserSettings />}
            {showAgentEdit && <AgentEdit />}
            <div className="streaming-console">
              <main>
                <div className="main-app-area">
                  {currentAgent ? <KeynoteCompanion /> : 
                    <div style={{textAlign: 'center', padding: '20px'}}>
                        <p className="spinner" style={{width: '60px', height: '60px', borderTopColor: 'var(--accent-blue)'}}></p>
                        <p style={{color: 'var(--text-secondary)', fontSize: '1.1rem'}}>Carregando agente ou aguardando seleção...</p>
                    </div>
                  }
                </div>
                <ControlTray />
              </main>
            </div>
          </>
        )}
      </LiveAPIProvider>
    </div>
  );
}

export default App;