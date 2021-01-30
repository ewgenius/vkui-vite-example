import React from 'react';
import { ConfigProvider, AppRoot, SplitLayout, SplitCol, AdaptivityProvider, View, Panel, PanelHeader } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";

function App() {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View activePanel="1">
                <Panel id="1">
                  <PanelHeader>Test</PanelHeader>
                </Panel>
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App
