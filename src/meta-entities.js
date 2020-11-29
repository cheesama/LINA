import * as React from "react";
import { List, Datagrid, TextField, ArrayField, EditButton } from 'react-admin';

export const EntityList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Entity_Type" />
            <TextField source="Entity_Value" />
            <ArrayField source="meta_synonyms">
                <Datagrid>
                    <TextField source="synonym" />
                </Datagrid>
            </ArrayField>
        </Datagrid>
    </List>
);