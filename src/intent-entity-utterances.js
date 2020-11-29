import * as React from "react";
import { List, Datagrid, TextField, ArrayField, ChipField, ReferenceField, EditButton } from 'react-admin';

export const UtteranceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="utterance" />
            <ReferenceField source="intent_id" label="intent" reference="meta-intents">
                <TextField source="Intent_ID" />
            </ReferenceField>
            <ArrayField source="entities">
                <Datagrid>
                    <TextField source="entity" />
                    <TextField source="start" />
                    <TextField source="end" />
                </Datagrid>
            </ArrayField>
            <ChipField source="data_type" />
        </Datagrid>
    </List>
);