import {Home, Profile, Following, Search, Upload} from '../pages';
import {OnlyHeaderLayout} from '../components'
const privateRouter = [

]

const publicRouter = [
    {path: '/', componet: Home},
    {path: '/profile', componet: Profile},
    {path: '/following', componet: Following},
    {path: '/search', componet: Search},
    {path: '/upload', componet: Upload, layout: OnlyHeaderLayout},
]

export {privateRouter, publicRouter};