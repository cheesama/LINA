import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

export const IntentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Intent_ID" />
            <TextField source="Main_CTG" />
        </Datagrid>
    </List>
);