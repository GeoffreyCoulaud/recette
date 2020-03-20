<template lang="pug">
	label(class="file-drop-area")
		div(class="decoration")
			slot(v-bind:default="fileName")
				span Click to import or drop file here
		input(type="file" ref="inputFile" @change="handleFileChange")
</template>

<script>
	import path from 'path';

	export default {
		name: 'file-drop-area',

		data: ()=>({
			fileName: null
		}),
		
		methods: {
			handleFileChange: function(event){
				// Emit the file change event
				this.$emit('fileChange', this.$refs.inputFile.value, this.$refs.inputFile);
				// Update the file name
				let value = this.$refs.inputFile.value;
				this.fileName = path.basename(value) + '.' + path.extname(value);
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@require './colors.styl';

	.file-drop-area
		display: inline-block;

		.decoration
			border: 0.25em dashed color-border-light-gray;
			color: color-text-light-gray;
			flex-direction: column;
			justify-content center;
			box-sizing: border-box;
			display: inline-flex;
			align-items: center;
			padding: 2em;
			height: 100%;
			width: 100%;


		input[type="file"]
			height: 0.1px;
			width: 0.1px;
</style>