<template>
    <div class="h100">
        <div v-show="showModal === true" name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-body">
                            <slot name="body">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     viewBox="0 0 94 70">
                                    <image id="check-solid" width="94" height="70"
                                           xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABGCAYAAABFVyOYAAAABHNCSVQICAgIfAhkiAAAA6dJREFUeJzt3LGrHEUcB/DPS0SwMSIElDQriIVos4g2FiIiBoMiWi0Wlhr9A5LWwghaWcRCLFTYwiqglYTEwsZmG8FCglkEUVEhClEU4VncHd573t27u92Znd3bb7u7M8OHYe9ubn6zt7+/b8x2qeryVpzFi8jwEy7hrTwrbqx6dm+E3y5VXZ7Ap3h0weVrOJ1nxbVlz4/wW2SK/hkeXnHb93hsGf6xEAMbctZEh1P4vKrLexddHOE3yAbosyzFH+HXzBbosyzEH+HXSAP0Wf6HP8IfkRbQZzmAP36rWZEW0efzLR4a4ZckEPosb4zwCxIYHb4e4Q8lAjr8On64ziUSOlwf4aeJiA4fja8a0dEv4/TOz/jI6FfxbJ4V/+w0fAfoZ/Ks+IMd/uXaJTo7Ct81OjsInwI6OwafCjo7BF/V5Z0SQYdbIgyi81R1eRJX8ECE7o5EZ034qi7vwRmcxHe4lGfFL42HGCEponPEenxVl3t4HedxfO7STbyaZ8UHDQcaNKmiswJ+in4RL694/myeFe9uPMQISRmdJR+ua6LDxaouX1l/fHGSOjoL4DdAnyUp/D6gcwh+C/RZksDvCzpz8A3QZ+kUv0/oTOFbQJ/lYlWX5xq2sXH6hs5/M/4dzdFnuRATv4/ocPyZl+57Hm83H9OBPPHDja/+uvuOB79oud0D6Ss6kxn/WhsNLUjQmd9ndCbw97fV2IIEwe87OhP4m202uCCt4g8BnQn85bYbXZBW8IeCzgT+An4L0fihNMIfEjocy7PiOp7Dn6E6mctW+ENDZ/o9Ps+Kqybr7cnhR0b/BE+HRufQsnBVl4+blBDeFrpjnM+z4s1VN3SA/kKeFX9H6OvgIlmeFVckMvOHjM6CZeEU8IeOzpI/QrrE3wV0jv7PNeo7H+/bAXTWKD6LjP8j7orQT6forFn1Fxk/dDpHZ82dZNN3/pP4PexwgicJdDasc63q8hGTbXC3BxtRuCSDzoZ7J/Os+FI/Z35S6GyxabWH+Mmhs+Vu4R7hJ4lOg23aPcBPFp2G++MTxk8anRYKExLETx6dlipCEsLvBTotluIkgN8bdFqugeoQv1foBCg+6wC/d+gEqvqLiN9LdAKWW0bA7y06getcA+L3Gp0IBcYB8HuPTqTK7hbxB4FOxJL6FvAHg07kswwa4A8KnQ4OkdgCf3DodHR6xwb4g0Snw2NT5vB/XnLLxwaKTgKHOld1eQrn8BRO4Bu8hw/zrBjs2Yz/Aut4Nu530VMIAAAAAElFTkSuQmCC"/>
                                </svg>

                                <p>Invalid Grant</p>
                                <p>The Username or password is incorret</p>
                            </slot>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="btn" @click="showModal= false">
                                    OK
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="index">
            <div class="container">
                <h1>
                    Welcome to<br/>
                    <span>remin</span>Store<br/>
                    BI tool.
                </h1>

                <div class="form">
                    <form action="" method="post" v-on:submit.prevent="submitForm()">
                        <div class="d-flex">
                            <div>
                                <label for="email">Email</label>
                                <input type="text" id="email" ref="email" v-model="email"
                                       placeholder="Please enter your email">
                            </div>

                            <div>
                                <label for="password">Password</label>
                                <input type="password" id="password" ref="password" v-model="password"
                                       placeholder="Please enter your password">
                            </div>

                        </div><!--/.d-flex-->

                        <div class="foot">
                            <a href="javascript:void(0)">Forgot Password?</a>
                            <button class="btn" type="submit">Login</button>
                        </div>
                    </form>
                </div><!--/.form-->

            </div><!--/.container-->
        </div><!--/.index-->

    </div>
</template>
<!-- template for the modal component -->

<script>
    export default {
        name: 'home',
        data() {
            return {
                email: "",
                password: "",
                message: "",
                showModal: false
            };
        },
        methods: {
            submitForm() {
                if (this.email !== "" && this.password !== "") {
                    if (this.email === process.env.VUE_APP_USERNAME && this.password === process.env.VUE_APP_PASSWORD) {
                        localStorage.login = true;
                        this.$router.push('/table')
                    } else {
                        this.showModal = true;
                    }
                } else {
                    this.email === "" ? this.$refs.email.focus() : this.$refs.password.focus();
                }
            },

        }
    }
</script>


