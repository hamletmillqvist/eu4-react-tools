import {Box, Tab} from "@mui/material";
import {useEffect, useState} from "react";
import * as Material from "@mui/material";

export interface ITabItem {
    text: string;
    element: React.ReactNode;
    disabled?: boolean;
}

interface IProps {
    items: ITabItem[];
    onAddTab?: (tab: ITabItem) => void;
    onRemoveTab?: (tab: ITabItem) => void;
}

export const Tabs = (props: IProps) => {
    const [activeTab, setActiveTab] = useState<ITabItem>();

    useEffect(() => {
        setActiveTab(props.items[0]);
    }, [props.items]);

    const onTabChanged = (tab: ITabItem) => {
        setActiveTab(tab);
    }

    const getSelectedIndex = () => {
        if (!activeTab) {
            return 0;
        }
        
        const index = props.items.indexOf(activeTab);
        return index < 0 ? 0 : index;
    };

    let selectedIndex = getSelectedIndex();

    return (
        <Box>
            <Box sx={{borderBottom: 1, borderColor: 'divider', marginBottom: 1}}>
                <Material.Tabs value={selectedIndex}>
                    {props.items.map((tab, i) => {
                            return <Tab key={i}
                                        label={tab.text}
                                        onClick={() => onTabChanged(tab)}
                                        disabled={tab.disabled}/>;
                        }
                    )}
                </Material.Tabs>
            </Box>
            <Box>
                {activeTab?.element}
            </Box>
        </Box>
    );
}