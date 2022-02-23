import { Input } from "./Input";
export default {
    title: 'common/Input',
    component: Input,
}

export const defaultInput = () => (
    <input text="Default Input" onChange={() => {}} />
);

export const largeInput = () => (
    <input text="Large Input" onChange={() => {}} size="large" />
    
);