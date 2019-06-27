# AlumniAssociation
Alumni Association Web Portal for Campbell Boyer at Plugins LLC 

## branches
- master: main branch for general designs.
- node-templates: templatized webpages for use with the Node.js backend in [ejs format](https://ejs.co/).

## Membership Options:
- Leads to Membership Types

## Signup:
- Leads to Profile Information

## Profile:
- New user is taken here (profile_nophoto.html if no photo exists)
- Activities: if there's a group connected to an activity. shows there
- Shared memories (modal is working, but doesn't retrieve an image)

## Admin:
- Will have a third tab for emailing anyone in the database

# Useful Database Tables and their current schema:

## Table: wp_zsghfg_bp_groups

Columns:
id
bigint(20) AI PK
creator_id
bigint(20)
name
varchar(100)
slug
varchar(200)
description
longtext
status
varchar(10)
enable_forum
tinyint(1)
date_created
datetime

## Table: wp_zsghfg_bp_groups_members

Columns:
id
bigint(20) AI PK
group_id
bigint(20)
user_id
bigint(20)
inviter_id
bigint(20)
is_admin
tinyint(1)
is_mod
tinyint(1)
user_title
varchar(100)
date_modified
datetime
comments
longtext
is_confirmed
tinyint(1)
is_banned
tinyint(1)
invite_sent
tinyint(1)

## Table: wp_zsghfg_connections

Columns:
id
bigint(20) AI PK
ts
timestamp
date_added
tinytext
ordo
int(11)
entry_type
tinytext
visibility
tinytext
slug
tinytext
family_name
tinytext
honorific_prefix
tinytext
first_name
tinytext
middle_name
tinytext
last_name
tinytext
honorific_suffix
tinytext
title
tinytext
organization
tinytext
department
tinytext
contact_first_name
tinytext
contact_last_name
tinytext
addresses
longtext
phone_numbers
longtext
email
longtext
im
longtext
social
longtext
links
longtext
dates
longtext
birthday
tinytext
anniversary
tinytext
bio
longtext
notes
longtext
excerpt
text
options
longtext
added_by
bigint(20)
edited_by
bigint(20)
owner
bigint(20)
user
bigint(20)
status
varchar(20)

## Table: wp_zsghfg_signups

Columns:
signup_id
bigint(20) AI PK
domain
varchar(200)
path
varchar(100)
title
longtext
user_login
varchar(60)
user_email
varchar(100)
registered
datetime
activated
datetime
active
tinyint(1)
activation_key
varchar(50)
meta
longtext

## Table: wp_zsghfg_users

Columns:
ID
bigint(20) UN AI PK
user_login
varchar(60)
user_pass
varchar(255)
user_nicename
varchar(50)
user_email
varchar(100)
user_url
varchar(100)
user_registered
datetime
user_activation_key
varchar(255)
user_status
int(11)
display_name
varchar(250)
