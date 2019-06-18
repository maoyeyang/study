<template>
  <div>
    <swiper :indicator-dots="false"
            :autoplay="false">
      <block v-for="(imgUrl,i) in imgUrls"
             :key="i">
        <swiper-item>
          <image :src="imgUrl"
                 class="slide-image"
                 width="355"
                 height="150" />
        </swiper-item>
      </block>
    </swiper>
    <p class="title">{{title}}</p>
    <input type="text"
           placeholder="input todo"
           v-model="todoContent" />
    <button @click="addTodo">添加一条</button>
    <button @click="clearTodo">清除</button>
    <ul class="todos">
      <li v-for="(item,i) in todos"
          :key="i"
          @click="toggle(i)"
          :class="{'done':item.done}">{{item.text}}</li>
      <li>{{todoCount}}/{{todos.length}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'hello mpvue',
      todos: [{
        text: '吃饭',
        done: false
      }, {
        text: '睡觉',
        done: false
      }, {
        text: '吃鸡',
        done: false
      }],
      todoContent: '',
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
    }
  },
  methods: {
    toggle (i) {
      const todos = this.todos.slice(0)
      todos[i].done = !todos[i].done
      this.todos = todos
    },
    addTodo () {
      if (this.todoContent.trim() === '')
        return
      this.todos.unshift({ text: this.todoContent, done: false })
      this.todoContent = ''
    },
    clearTodo () {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  computed: {
    todoCount () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  watch: {
    todos: function (todos) {
      wx.setStorageSync("todos", todos);
    }
  },
  created () {
    if (wx.getStorageSync('todos') !== '')
      this.todos = wx.getStorageSync('todos');
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>