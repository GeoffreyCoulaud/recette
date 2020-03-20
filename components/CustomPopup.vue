<template lang="pug">

	div(class="popup" :class="[isHidden?'hidden':'']")

		//- Buttons at the top (close)
		header(class="top-controls")
			custom-button(:type="'close'" @close="isHidden = true;") X

		//- Custom content in the popup
		div(class="content") 
			slot

		//- Popup controls (accept, refuse)
		footer(v-if="buttons.length" class="bottom-controls")
			custom-button(
				@refuse="$emit('refuse')",
				@accept="$emit('accept')",
				v-for="(b, index) in buttons",
				:key="index",
				:type="b"
			)
</template>

<script>
	import CustomButton from './CustomButton.vue';

	export default {
		name: 'custom-popup',

		props: {
			buttons: {
				type: Array,
				default: ()=>[]
			},
			isHidden: {
				type: Boolean,
				default: true
			}
		},

		methods: {},
		
		components: {
			CustomButton
		}
	}
</script>

<style lang="stylus" scoped>
	@require './colors.styl';

	.popup
		transition: transform 0.125s ease-in-out;
		transform-origin: top center;
		box-shadow: shadow-default;
		background-color: white;
		border-radius: 0.5em;

		&.hidden
			transform: scale(0);
		
		.bottom-controls, 
		.top-controls,
		.content
			box-sizing: border-box;

		.bottom-controls,
		.top-controls
			justify-content flex-end;
			box-sizing: border-box;
			display: flex;
			padding: 1em;
			width: 100%;

		.top-controls

			& > *:first-child
				margin-left: 0px;

			& > *:last-child
				margin-right: 0px;
		
		.content
			padding: 0px 1em;
			width: 100%;

		.bottom-controls
			border-top: color-border-light-gray 1px solid;
			background-color: color-background-light-gray;
</style>