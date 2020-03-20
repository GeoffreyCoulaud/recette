<template lang="pug">
	div(class="editor")
		//- The editor controls will show here
		editor-menu-bar(:editor="editor", v-slot="{commands, isActive}")
			div 
				custom-button(
					:class="{'isActive': isActive.bold()}", 
					@click="commands.bold"
				) Bold
				custom-button(
					:class="{'isActive': isActive.italic()}", 
					@click="commands.italic"
				) Italic
				custom-button(
					:class="{'isActive': isActive.blockquote()}", 
					@click="commands.blockquote"
				) Quote
				custom-button(
					:class="{'isActive': isActive.underline()}",
					@click="commands.underline"
				) Underline
				custom-button(
					@click="$refs.imageImportPopup.isHidden = !$refs.imageImportPopup.isHidden"
				) Insert an image
		
		//- Here will go the editor content
		editor-content(:editor="editor")

		//- Popups will show and pile here 
		div(class="popup-wrapper")

			image-import-popup(ref="imageImportPopup")

</template>

<script>
	// Project components
	import ImageImportPopup from './ImageImportPopup.vue';
	import CustomButton from './CustomButton.vue';

	// Import the editor
	import {
		Editor, 
		EditorContent, 
		EditorMenuBar
	} from 'tiptap';
	
	// Import editor extensions
	import { 
		Blockquote,
		BulletList,
		HardBreak,
		Heading,
		ListItem,
		OrderedList,
		Bold,
		Italic,
		Underline,
		History,
		Image,
	} from 'tiptap-extensions';

	// Component
	export default {
		mounted (){
			this.editor = new Editor({
				content: '<h1>Title</h1><p>Cupidatat sit anim labore sit anim eu id laborum.</p>',
				extensions: [
					new Bold(),
					new Italic(),
					new Blockquote(),
					new History(),
					new Underline(),
					new Image(), // Here
					new Heading({levels: [1,2,3]}),
					new OrderedList(),
					new BulletList(),
					new ListItem(),
					new HardBreak()
				]
			});
		},
		beforeDestroy (){
			this.editor.destroy();
		},

		name: 'text-editor',

		components: {
			ImageImportPopup,
			EditorContent,
			EditorMenuBar,
			CustomButton,
		},

		data: ()=>({
			editor: null,
			popups: {
				image: true
			},
		}),

		methods: {
			insertImage: function(){
				// Add the image to the editor from url
				const popup = this.$refs.imageImportPopup;

			}
		},

		
	}
</script>

<style lang="stylus" scoped>
	.editor
		position: relative;

	.popup-wrapper
		max-height: calc(100% - 1em);
		position: absolute;
		top: 0.5em;
		width: 50%;
		left: 25%;
</style>