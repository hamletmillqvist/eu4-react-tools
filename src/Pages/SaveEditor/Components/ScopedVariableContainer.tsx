import React, {useState} from "react";
import {Box, ListItemIcon, ListItemText, Menu, MenuItem, MenuList} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import VariableEditorDialog from "../Dialogs/VariableEditorDialog.tsx";
import ScopeVariable from "../ScopeVariable.ts";

interface IScopeVariableContainerProps {
    variable: ScopeVariable;
    onSave: (variable: ScopeVariable) => void;
}

const ScopeVariableContainer = (props: IScopeVariableContainerProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (anchorEl) {
            return;
        }

        if (isEditDialogOpen) {
            return;
        }

        setAnchorEl(e.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    const onEditClick = () => {
        setAnchorEl(null);
        setIsEditDialogOpen(true);
    }

    const onRemoveClick = () => {

    }

    const onSave = (changedVariable: ScopeVariable) => {
        setIsEditDialogOpen(false);
        props.onSave(changedVariable);
    };

    const varId = `scope-variable-${props.variable.scope.name}-${props.variable.name}`;

    return (
        <Box sx={{
            marginLeft: 4,
            ":hover": {
                backgroundColor: "#eee"
            }
        }}
             onClick={onClick}
             id={varId}
             aria-haspopup="true"
             aria-controls={open ? 'variable-menu' : undefined}
             aria-expanded={open ? 'true' : undefined}>

            {props.variable.name}: {props.variable.value}

            <Menu open={open}
                  id="variable-menu"
                  onClose={() => onClose()}
                  anchorEl={anchorEl}
                  MenuListProps={{
                      'aria-labelledby': varId,
                  }}>
                <MenuList dense>
                    <MenuItem onClick={onEditClick}>
                        <ListItemIcon><Edit fontSize="small"/></ListItemIcon>
                        <ListItemText>Edit</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={onRemoveClick}>
                        <ListItemIcon><Delete fontSize="small"/></ListItemIcon>
                        <ListItemText>Remove</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
            <VariableEditorDialog open={isEditDialogOpen}
                                  variable={props.variable}
                                  onSave={onSave}
                                  onClose={() => setIsEditDialogOpen(false)}/>
        </Box>
    );
}

export default ScopeVariableContainer;