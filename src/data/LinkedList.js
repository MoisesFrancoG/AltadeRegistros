import { Node } from "./Node.js";

export class LinkedList {
    #count;
    #head;

    constructor() {
        this.#count = 0;
        this.#head = null;
    }

    push(item) {
        const node = new Node(item);
        let current;
        if (this.#head == null) {
            this.#head = node;
        } else {
            current = this.#head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.#count++;
    }

    insert(data, index) {
        if (index >= 0 && index <= this.#count) {
            const node = new Node(data);
            if (index === 0) {
                const current = this.#head;
                node.next = current;
                this.#head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.#count++;
            return true;
        }
        return false;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.#count) {
            let node = this.#head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    remove(data) {
        const index = this.indexOf(data);
        return this.removeAt(index);
    }

    removeAt(index) {
        if (index >= 0 && index < this.#count) {
            let current = this.#head;
            if (index === 0) {
                this.#head = current.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.#count--;
            return current.data;
        }
        return undefined;
    }

    isEmpty() {
        return this.#count === 0;
    }

    size() {
        return this.#count;
    }

    getHead() {
        return this.#head;
    }

    getCount() {
        return this.#count;
    }
    printList() {
        let current = this.#head;
        while (current != null) {
            console.log(current.data); // Suponiendo que cada nodo tiene un campo "data"
            current = current.next;
        }
    }
}
