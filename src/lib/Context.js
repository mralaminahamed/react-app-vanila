class Context {
    constructor(value) {
        this.value = value;
    }

    //provider
    Provider = ({children, value}) => {
        this.value = value;
        return children;
    }

    //consumer
    Consumer = ({children}) => children(this.value)
}
export default function createContext( value = undefined) {
    const context = new Context(value)

    return {
        Provider : context.Provider,
        Consumer : context.Consumer
    }
}