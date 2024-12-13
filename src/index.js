import { add } from 'lodash'

const NanToZero = (num) => {
   return Number.isNaN(num)?0:num
}
export const add = (...adds) => {
    return add(...adds.map(item => {
        if(!item){
            return 0
        }

        if(typeof item === 'string'){
            return NanToZero(Number(item))
        }else{
            return NanToZero(item)
        }
    }))
}