(function() {
    var __blocks__ = {};
    (function() {
        for (var element = document.getElementById("blocks-script"), attribute = a = element ? element.getAttribute("data-blocks") : "", blocks = a.split(",").filter(Boolean), i = 0; i < blocks.length; i++) __blocks__[blocks[i]] = !0
    })(), (function() {
        if (!(!__blocks__["ugc-gallery"] && !Shopify.designMode)) try {
            const videos = document.querySelectorAll(".ugc-gallery-content--wrapper [video-thumb]"),
                videoDetail = document.getElementById("ugc-video-details"),
                videoDetailSource = document.getElementById("ugc-video-details-source"),
                modal = document.querySelector(".UGCDetailsModal");
            videos.forEach(video => {
                video.addEventListener("click", () => {
                    modal && (modal.show(), videoDetailSource.src = video.currentSrc, videoDetail.load(), videoDetail.muted = !1, videoDetail.play())
                })
            }), document.body.addEventListener("modalClosed", () => {
                videoDetailSource.src = null, videoDetail.muted = !0, videoDetail.pause()
            }), window.pauseAllMedia = () => {
                document.querySelectorAll(".js-youtube").forEach(video => {
                    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                }), document.querySelectorAll(".js-vimeo").forEach(video => {
                    video.contentWindow.postMessage('{"method":"pause"}', "*")
                }), document.querySelectorAll("video").forEach(video => video.pause()), document.querySelectorAll("product-model").forEach(model => {
                    model.modelViewerUI && model.modelViewerUI.pause()
                })
            };
            class ModalDialog extends HTMLElement {
                constructor() {
                    super(), this.querySelector('[id^="ModalClose-"]').addEventListener("click", this.hide.bind(this, !1)), this.addEventListener("keyup", event => {
                        event.code.toUpperCase() === "ESCAPE" && this.hide()
                    }), this.classList.contains("media-modal") ? this.addEventListener("pointerup", event => {
                        event.pointerType === "mouse" && !event.target.closest("deferred-media, product-model") && this.hide()
                    }) : this.addEventListener("click", event => {
                        event.target === this && this.hide()
                    })
                }
                connectedCallback() {
                    this.moved || (this.moved = !0, document.body.appendChild(this))
                }
                show(opener) {
                    this.openedBy = opener;
                    const popup = this.querySelector(".template-popup");
                    document.body.classList.add("overflow-hidden"), this.setAttribute("open", ""), popup && popup.loadContent(), trapFocus(this, this.querySelector('[role="dialog"]'))
                }
                hide() {
                    let isOpen = !1;
                    this.removeAttribute("open"), document.body.classList.remove("overflow-hidden"), document.body.dispatchEvent(new CustomEvent("modalClosed"))
                }
            }
            customElements.define("modal-dialog", ModalDialog);
            class ModalOpener extends HTMLElement {
                constructor() {
                    super();
                    const button = this.querySelector("button");
                    button && button.addEventListener("click", () => {
                        const modal2 = document.querySelector(this.getAttribute("data-modal"));
                        modal2 && modal2.show(button)
                    })
                }
            }
            customElements.define("modal-opener", ModalOpener)
        } catch (e) {
            console.error(e)
        }
    })()
})();
//# sourceMappingURL=/cdn/shop/t/275/compiled_assets/block-scripts.js.map?v=87919899612847006551781206503