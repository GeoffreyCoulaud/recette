<template lang="pug">
	input(:type="type", :placeholder="placeholder" v-model="value")
</template>

<script>
export default {
	name: "custom-text-input",

	props: {
		type: {
			type: String,
			default: 'text',
			validator: (value)=>['text', 'email', 'password', 'number'].includes(value)
		},
		placeholder: {
			type: String,
			default: ''
		}
	},

	data: ()=>({
		value: ''
	})
}
</script>

<style lang="stylus" scoped>
	@require './colors.styl';

	input
		border: 1px solid color-border-light-gray;
		background-color: color-background-white;
		box-sizing: border-box;
		padding: 0.5em 0.75em;
		border-radius: 0.5em;
		font-family: inherit;
		font-size: 1em;
</style>