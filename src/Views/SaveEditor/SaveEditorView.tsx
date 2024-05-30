import {ITabItem, Tabs} from "../../Components/Tabs.tsx";
import {useState} from "react";
import {SaveEditorTab} from "./SaveEditorTab.tsx";

export const SaveEditorView = () => {

    const [tabs, setTabs] = useState<ITabItem[]>([
        {
            text: "Untitled",
            element: <SaveEditorTab></SaveEditorTab>
        },
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