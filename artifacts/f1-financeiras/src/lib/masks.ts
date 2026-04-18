export const maskCpf = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

export const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}

export const maskPlate = (value: string) => {
  return value
    .replace(/[^a-zA-Z0-9]/g, '')
    .toUpperCase()
    .substring(0, 7);
}

export const validateCpf = (cpf: string) => {
  const cleanCpf = cpf.replace(/\D/g, '');
  if (cleanCpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cleanCpf)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cleanCpf.charAt(i)) * (10 - i);
  let rest = 11 - (sum % 11);
  let digit = rest === 10 || rest === 11 ? 0 : rest;
  if (digit !== parseInt(cleanCpf.charAt(9))) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cleanCpf.charAt(i)) * (11 - i);
  rest = 11 - (sum % 11);
  digit = rest === 10 || rest === 11 ? 0 : rest;
  return digit === parseInt(cleanCpf.charAt(10));
}
