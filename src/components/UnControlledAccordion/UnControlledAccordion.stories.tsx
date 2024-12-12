import {action} from "@storybook/addon-actions"

import React, {useState} from "react";
import {UnControlledAccordion} from "./UnControlledAccordion";

export default {
    component: UnControlledAccordion
}

export const AccordionDemo = () => <UnControlledAccordion titleValue="Accordion"/>