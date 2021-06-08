<template>
    <div class="container">
        <slide-title v-if="context.data.show_title" :slide="slide"></slide-title>
        <div class="slide-content" :style="{backgroundColor: bgColor}">
            <div class="container-message">
                <div class="title">
                    <strong v-if="hasTitle">{{ slide.data.title }}</strong>
                </div>
                <div class="container-animation">
                    <div class="message-text">
                        <div v-html="messageWithBr" :style="messageStyle"></div>
                    </div>
                    <div class="line">
                        <hr :style="lineStyle"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import htmlspecialchars from 'htmlspecialchars'
    export default {
        props: { context: {type: Object} },
        data: function () {
            return {
                background_color: {},
                font_size_message: {},
                line_style: {}
            }
        },
        computed: {
            messageWithBr() {
                return (htmlspecialchars(this.slide.data.message) + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2')
            },
            hasTitle() {
                return this.slide.data.title !== ''
            },
            bgColor() {
                if (this.slide.data.backgroundColor === 'red_background') {
                    return '#f44336'
                } else if (this.slide.data.backgroundColor === 'blue_background') {
                    return '#2196f3'
                } else if (this.slide.data.backgroundColor === 'green_background') {
                    return '#4caf50'
                } else if (this.slide.data.backgroundColor === 'pink_background') {
                    return '#e91e63'
                } else if (this.slide.data.backgroundColor === 'blue_dark_background') {
                    return '#3f51b5'
                } else if (this.slide.data.backgroundColor === 'turquoise_background') {
                    return '#009688'
                } else if (this.slide.data.backgroundColor === 'brown_background') {
                    return '#795548'
                }
                return '#9e9e9e'
            },
            messageLength() {
                return this.slide.data.message.length;
            },
            messageStyle() {
                let style = {};
                if (this.messageLength >= 500) {
                    style.fontSize = '0.8em'
                } else if (this.messageLength >= 400 && this.messageLength < 500) {
                    style.fontSize = '0.9em'
                } else if (this.messageLength >= 300 && this.messageLength < 400) {
                    style.fontSize = '1em'
                    style.marginTop = '0.5em'
                } else if (this.messageLength >= 200 && this.messageLength < 300) {
                    style.fontSize = '1.1em'
                    style.marginTop = '0.7em'
                } else if (this.messageLength >= 100 && this.messageLength < 200) {
                    style.fontSize = '1.2em'
                    style.marginTop = '0.9em'
                } else if (this.messageLength >= 50 && this.messageLength < 100) {
                    style.fontSize = '1.3em'
                    style.marginTop = '1.4em'
                } else {
                    style.fontSize = '1.6em'
                    style.textAlign = 'center'
                    style.marginTop = '1.8em'
                }

                return style;
            },
            lineStyle() {
                if (this.messageLength < 50) {
                    return {display: 'none'};
                }
                return {display: 'block'};
            }
        },
        created() {

        }
    }
</script>
