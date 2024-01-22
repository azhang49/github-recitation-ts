// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

type Req = {
  params : { num: string }
}

type Res = {
  send: (s: string) => void
}

export default (req: Req, res: Res) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
