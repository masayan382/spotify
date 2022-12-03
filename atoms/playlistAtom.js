import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export const playlistState = atom({
    key: "playlistState",
    default: null,
})
export const playlistIdState = atom({
    key: "playlistIdState",
    default: '0GasD1zLmL1zS0V63BjT6X'
})