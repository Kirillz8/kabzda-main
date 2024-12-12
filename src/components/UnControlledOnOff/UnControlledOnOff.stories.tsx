import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
    component: UnControlledOnOff
}

const callback = action('Clicked')

export const OnMode = () => <UnControlledOnOff defaultValue={true} onChange={callback}/>
export const OffMode = () => <UnControlledOnOff defaultValue={false} onChange={callback}/>
export const BugMode = () => <div>UnSync when change defaultValue when already rendered</div>
