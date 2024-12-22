import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
type SingedInState = {
    isSingedIn: boolean
}
type UserDataState = {
    userData: null | object
}
type SearchState = {
    searchInput: string
}
type BlogDataState = {
    blogData: null | object
}



export const userSlice: Slice = createSlice({
    name: "user",
    initialState: {

        userData: null,
        searchInput: "",
        blogData: null,
    },
    reducers: {

        setUserData: (state: UserDataState, action: PayloadAction<null | object>) => {
            state.userData = action.payload;
        },
        setInput: (state: SearchState, action: PayloadAction<string>) => {
            state.searchInput = action.payload;
        },
        setBlogData: (state: BlogDataState, action: PayloadAction<null | object>) => {
            state.blogData = action.payload;
        },
    }
})

export const { setSingedIn, setUserData, setInput, setBlogData } = userSlice.actions

export const selectUserData = (state) => state.user.userData;
export const selectUserUnput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;


export default userSlice.reducer;