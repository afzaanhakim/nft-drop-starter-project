//function to check window object if solana/phantom wallet is found 

  const checkIfWalletIsConnected = async() => {
  try {
    const { solana } = window;
if(solana) {
 if(solana.isPhantom) {
   console.log("phantom is found")
 } }
 else {
   alert('Solana wallet not found. Get a Phantom Wallet')
 }}
catch (error) {
 console.log(error)
}  }

module.exports = {checkIfWalletIsConnected}