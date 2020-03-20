<template lang="pug">

	div(class="image-import-form")
		custom-text-input(
			class="image-url-input",
			ref="imageUrlInput",
			type="text",
			placeholder="Paste image url here"
			@input="handleUrlInput"
		)
		file-drop-area(
			class="image-file-input"
			@fileChange="handleFileInput"
		)
			span Or click to import, or drop image file here

</template>

<script>
	import fileToDataUrl from '../helpers/fileToDataUrl.js';
	import CustomTextInput from './CustomTextInput.vue';
	import FileDropArea from './FileDropArea.vue';

	export default {
		name: "image-import-form",
		
		data: ()=>({
			imageUrl: null,
			imageDataUrl: null,
			isWaiting: false
		}),

		components: {
			CustomTextInput,
			FileDropArea,
		},

		methods: {
			handleUrlInput: function(event){
				this.imageUrl = this.$refs.imageUrlInput.value;
			},

			handleFileInput: async function(value, input){
				this.isWaiting = true;
				this.imageDataUrl = await fileToDataUrl(input.files[0]);
				this.isWaiting = false;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.image-import-form
		box-sizing: border-box;
		text-align: center;
		width: 100%;

		.image-url-input,
		.image-file-input
			width: 100%;

		.image-url-input
			margin-bottom: 1em;
		
</style>