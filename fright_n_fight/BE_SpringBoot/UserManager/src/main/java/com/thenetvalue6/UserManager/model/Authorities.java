package com.thenetvalue6.UserManager.model;

public class Authorities {
    public static final String[] USER_AUTHORITIES = { "user:read" };
    public static final String[] MOD_AUTHORITIES = { "user:read", "user:update" };
    public static final String[] ADMIN_AUTHORITIES = { "user:read", "user:update", "user:create", "user:delete" };
}
