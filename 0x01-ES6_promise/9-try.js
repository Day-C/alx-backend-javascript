export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
  } catch (e) {
    queue.push(e.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
