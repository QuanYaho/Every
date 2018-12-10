<template>
    <div class="emoji-wrapper" ref="emoji" v-html="face"  @click="getEmoji($event)"></div>
</template>

<script>
import { face_code, transface } from "./qqface.js"

export default {
    data() {
        return {
            face: ''
        }
    },
    mounted() {
        this.loadFace()
    },
    methods: {
        loadFace() {
            let face = '';
            for (let index = 0; index < 100; index++) {
                face += face_code[index] + ' ';
            }
            face = transface('msg', face);
            this.face = face
        },
        getEmoji(e) {
            if(e.target.getAttribute('code')) {
                let code = e.target.getAttribute('code')
                let imgCode = face_code[code];   // 表情码
                let img = transface('msg',imgCode) // 表情图
                this.$emit('emojiHandle',{
                    imgCode: imgCode,
                    img: img
                })

            }
        }
    },
}
</script>

<style lang="scss" scoped>
.emoji-wrapper {
    width: 500px;
    height: 200px;
    border: 1px solid #d9e4ef;
    background-color: #fff;
    padding: 3px 20px;
    box-sizing: border-box;
}
</style>