{ pkgs, fetchFromGitHub, pnpm2nix }:

let
  srcAttrs = pkgs.lib.importJSON ./src.json;

in pnpm2nix.mkPnpmPackage {
  src = pkgs.lib.cleanSource ./package;
  allowImpure = true;
  packageJSON = ./package/package.json;
  shrinkwrapYML = ./package/shrinkwrap.yaml;
}
