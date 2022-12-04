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
    default: '37i9dQZF1DZ06evO2TjjHl'
})