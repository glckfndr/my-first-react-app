function Message({ name }: { name?: string }) {
  if (name) return <h1>Hello {name} from React Application!</h1>;
  return <h1>Hello World!</h1>
}

export default Message;
