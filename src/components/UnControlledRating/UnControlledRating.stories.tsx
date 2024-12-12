import {action} from "@storybook/addon-actions";
import {UnControlledRating} from "./UnControlledRating";


export default {
    component: UnControlledRating
}

export const callback = action('rating changed inside component')

export const EmptyRating = () => <UnControlledRating defaultValue={1} onChange={callback}/>
// export const UnControlledRating1 = () => <UnControlledRating defaultValue={1} />
// export const UnControlledRating2 = () => <UnControlledRating defaultValue={2} />
// export const UnControlledRating3 = () => <UnControlledRating defaultValue={3} />
// export const UnControlledRating4 = () => <UnControlledRating defaultValue={4} />
// export const UnControlledRating5 = () => <UnControlledRating defaultValue={5} />

// export const ChangeRating = () => {
// const onChangeHandler = action('onChange')
//     const [rating, setRating] = useState<RatingValueType>(0)
//     return (
//         <Rating value={rating} onClick={setRating}/>
//     )
// }