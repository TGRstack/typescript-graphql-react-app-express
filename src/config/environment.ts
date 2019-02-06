const {
  NODE_ENV,
} = process.env
export const isProd = NODE_ENV === 'prod' || NODE_ENV === 'production'
