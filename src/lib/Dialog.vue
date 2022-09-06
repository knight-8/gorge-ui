<!--
 * @Author: jiajunwa@outlook.com jiajunwa@outlook.com
 * @Date: 2022-08-30 13:20:24
 * @LastEditors: jiajunwa@outlook.com jiajunwa@outlook.com
 * @LastEditTime: 2022-09-06 17:49:33
 * @FilePath: \com-ui-1\src\lib\Dialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="gorge-dialog-overlay" @click="OnClickOverlay"></div>
      <div class="gorge-dialog-wrapper">
        <div class="gorge-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="gorge-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
  
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const OnClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      if (props.cancel?.() !== false) {
        close();
      }
    };
    return { close, OnClickOverlay, ok, cancel };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.gorge-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>