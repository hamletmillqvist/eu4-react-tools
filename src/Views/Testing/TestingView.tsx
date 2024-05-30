import {useState} from "react";
import {ITabItem, Tabs} from "../../Components/Tabs.tsx";
import {TestTabDialogs} from "./TestTab1/TestTabDialogs.tsx";

export const TestingView = () => {
    const [tabs, setTabs] = useState<ITabItem[]>([
        {text: "Dialogs", element: <TestTabDialogs/>},
        {text: "Test 2", element: <>And this is the second one</>},
        {text: "Disabled tab", element: <>This one shouldn't be openable</>, disabled: true,},
    ]);

    const onAddTab = (tab: ITabItem) => {
        setTabs(prevState => [...prevState, tab]);
    }

    const onRemoveTab = (tab: ITabItem) => {
        setTabs(prevState => [...prevState].filter(f => f.text != tab.text));
    }

    return (<>
        <Tabs items={tabs}
              onAddTab={onAddTab}
              onRemoveTab={onRemoveTab}>
        </Tabs>
    </>)
}