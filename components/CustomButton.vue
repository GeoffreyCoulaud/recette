<template lang="pug">
	//- Classic button
	button(
		v-if="['generic', 'accept', 'refuse', 'close'].includes(type)",
		class="button button-classic",
		type="button",
		:class="['button-'+type, important?'button-important':'']",
		:disabled="disabled",
		@click="handleClick"
	) 
		slot {{ texts[type] }}

	//- Import file button
	label(
		v-else-if="['selectFile'].includes(type)",
		class="button button-file", 
		:class="['button-'+type]", 
		:disabled="disabled"
	)
		input(type="file", @change="handleFileChange", ref="inputFile")
		span 
			slot {{ texts[type] }}
		
</template>

<script>
export default {
	name: 'custom-button',
	props: {
		type: {
			validator: (value)=>['generic', 'accept', 'refuse', 'close', 'selectFile'].includes(value),
			default: 'generic'
		},
		important: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data: ()=>({
		// Text to display in the button if no custom text provided
		// ? Enable language support
		texts: {
			'generic': '',
			'accept': 'OK',
			'refuse': 'Cancel',
			'close': 'Close',
			'selectFile': 'Select a file'
		}
	}),
	methods: {
		handleClick: function(event){
			
			// Do nothing if the button is disabled
			if (this.disabled){
				return;
			}

			// Emit the right event for the button type
			switch (this.type) {
				case 'accept':
					this.$emit('accept')
					break;
				
				case 'refuse':
					this.$emit('refuse');
					break;

				case 'close' :
					this.$emit('refuse');
					this.$emit('close');
					break;

				default:
					this.$emit('click');
					break;
			}
		},

		handleFileChange: function(event){
			// Emit the file change event
			this.$emit('fileChange', this.$refs.inputFile.value, this.$refs.inputFile);
		}
	}
}
</script>

<style lang="stylus" scoped>
	@require './colors.styl';

	.button
		color: color-text-dark;
		box-sizing: border-box;
		border-radius: 0.25em;
		display: inline-block;
		padding: 0.5em 0.75em;
		margin: 0px 0.5ex;
		text-align: left;
		cursor: pointer;
		font-size: 1em; 
		border: none;

	.button-accept
		background-color: color-accent-green;
	
	.button-refuse
		background-color: color-accent-light-gray;
	
	.button-close
		background-color: color-accent-light-gray;

	.button-important
		background-color: color-accent-red;

	.button-file
		input
			// Hide the default input button 
			height: 0.1px;
			width: 0.1px;
</style>