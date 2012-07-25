# MSSqlx

0.0.1

A microsoft sql server nodejs command-line interface

## Install

``` sh
npm install mssqlx -g
```

## Setup

Create a config.json file in the directory you want to use mssqlx

``` json
{
  "production": {
    "server": "127.0.0.1",
    "userName": "sa",
    "password": "",
    "options": { "database": "master" }
  }
}
```

## Usage

``` sh
echo "select id, name from sysobjects" | mssqlx | prettyjson
```

## Roadmap

This projects goal is to create an awesome cli experience for querying mssql, it hopes the follow the footsteps of the futon-cli

This first release is a mvp just to put some mileage on the tedious mssql driver and identify any issues.

## Feedback 

Please submit feedback via Github Issues

