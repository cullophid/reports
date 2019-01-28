module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.MONGODB_URL": JSON.stringify(process.env.MONGODB_URL),
      "process.env.JWT_SECRET": JSON.stringify(process.env.JWT_SECRET),
      "process.env.SENDGRID_API_KEY": JSON.stringify(
        process.env.SENDGRID_API_KEY
      )
    })
  ]
};
