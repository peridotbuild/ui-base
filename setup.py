from setuptools import setup, find_packages  # noqa: H301

NAME = "pv2_ui_base"
VERSION = "1.0.0"

setup(
    name=NAME,
    version=VERSION,
    packages=find_packages(where="dist"),
    package_dir={"": "dist"},
    package_data={"pv2_ui_base": ["pv2.min.css"]},
    include_package_data=True,
)