<template lang="pug">
	custom-popup(
		@refuse="isHidden = true",
		:buttons="['refuse', 'accept']",
		@accept="$emit('accept')"
		:isHidden="isHidden",
		ref="popup"
	)
		image-import-form
</template>

<script>
	import ImageImportForm from './ImageImportForm.vue';
	import CustomPopup from './CustomPopup.vue';
	
	export default {
		name: 'image-import-popup',
		
		components: {
			ImageImportForm,
			CustomPopup
		},

		data: ()=>({
			isHidden: true
		}),
		
		methods: {},
	}
</script>

<style lang="stylus" scoped>
	
</style>