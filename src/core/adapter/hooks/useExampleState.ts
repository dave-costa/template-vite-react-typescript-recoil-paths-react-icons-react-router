import { useRecoilState } from 'recoil';
import { exampleState } from '../states/example';
export const useExampleState = () => useRecoilState(exampleState)