<template>
    <div>
        <h3>글쓰기</h3>
        
        <input type="text" placeholder="제목" />
        <ckeditor :editor="editor" v-model="editorData"
            :config="editorConfig"></ckeditor>

        <input type="button" value="저장하기" @click="handleSave">
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import UploadAdapter from './UploadAdapter.js';
import axios from 'axios';

export default {
    setup () {
        

        return {}
    },
    data() {
        return {
            editor       : ClassicEditor,
            editorData   : '<p>미리 추가되는 내용 테스트</p>',
            editorConfig : {
                extraPlugins:[this.uploader],
            }
        }
    },
    
    methods:{
        async handleSave() {
            const url = `/board/ckeditor_save`;
            const headers = {"Content-Type":"application/json"};
            const body = {content:this.editorData};
            const response = await axios.post(url, body, {headers});
            console.log(response.data);
        },

        uploader(editor) {
            editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
                return new UploadAdapter( loader );
            };
        }
    }
}
</script>

<style lang="scss" scoped>

</style>