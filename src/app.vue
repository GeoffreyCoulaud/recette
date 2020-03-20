<template lang="pug">
	div(id="app")
		text-editor
</template>

<script>
	// Import the editor
	import TextEditor from '../components/TextEditor.vue';

	// Component
	export default {
		name: 'app',
		components: {
			TextEditor
		}
	}
</script>

<style scoped lang="stylus">
	#app
		font-family: Helvetica, Arial, sans-serif;
</style>