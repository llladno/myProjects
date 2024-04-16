export default module.exports = {
    push(x) {
        que.push(x)
        // Напишите реализацию метода push.
        // Добавляет элемент в очередь.
    },
    shift() {
        if (que.length == 0) {
            return 0
        }
        else {
            return que.shift()
        }
    },
    min() {
        if (que.length == 0) {
            return 0
        }
        else {
            const c = (value) => value.reduce((x, y) => Math.min(x, y))
            return c(que)
        }
    },
    // Напишите реализацию метода max.
    // Возвращает максимальное недовольство в очереди.
    max() {
        if (que.length == 0) {
            return 0

        }
        else {
            const o = (value) => value.reduce((x, y) => Math.max(x, y))
            return o(que)
        }
        // Напишите реализацию метода max.
        // Возвращает максимальное недовольство в очереди.
    }
}