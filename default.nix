self: super:

{
  pnpm2nix = (import (super.fetchFromGitHub {
    owner = "adisbladis";
    repo = "pnpm2nix";
    rev = "42f9ed375ed571f5a6c256e684578ae262b72a0a";
    sha256 = "1lg95mk12v9zk5x2bjyp1zb7bqgrgsj63z4ar4rqkwd73fli4b6m";
  }) { pkgs = self; });
  ts-abigen = super.callPackage ./ts-abigen { };
}
