curl -fsSL https://deno.land/x/install/install.sh | sh
echo "export DENO_INSTALL=\"$HOME/.deno\"" >> ~/.bashrc
echo "export PATH=\"$HOME/.deno/bin:\$PATH\"" >> ~/.bashrc
echo "Installation finished, start a new bash session to apply the changes"
