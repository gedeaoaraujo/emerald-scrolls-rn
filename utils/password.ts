import * as Crypto from 'expo-crypto'

const salt = '!@-666-@!'

export const cryptPass = async (password: string) => (
  await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA512, password + salt
  )
)